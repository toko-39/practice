const { useState, useEffect } = React;

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [activeView, setActiveView] = useState('dashboard');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [settings, setSettings] = useState({
        darkMode: false,
        alwaysShowSidebar: true,
        animations: true,
        playSound: false,
        autoSave: true,
        itemsPerPage: 20
    });
    const [profile, setProfile] = useState({
        name: 'ユーザー',
        email: 'user@example.com',
        bio: 'タスク管理を頑張っています！',
        avatar: '👤'
    });

    // ローカルストレージからデータを読み込み
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        const savedSettings = localStorage.getItem('settings');
        const savedProfile = localStorage.getItem('profile');
        
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }
    }, []);

    // データが変更されたらローカルストレージに保存
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile));
    }, [profile]);

    // 新しいTodoを追加
    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false,
                createdDate: new Date().toISOString()
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    // Todoの完了状態を切り替え
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                const updated = { ...todo, completed: !todo.completed };
                if (updated.completed) {
                    updated.completedDate = new Date().toISOString();
                } else {
                    delete updated.completedDate;
                }
                return updated;
            }
            return todo;
        }));
    };

    // Todoを削除
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Todoを復元（未完了に戻す）
    const restoreTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: false, completedDate: null } : todo
        ));
    };

    // 統計情報を計算
    const todoStats = {
        total: todos.length,
        completed: todos.filter(todo => todo.completed).length,
        remaining: todos.filter(todo => !todo.completed).length
    };

    // メインコンテンツのレンダリング
    const renderMainContent = () => {
        switch (activeView) {
            case 'dashboard':
                return <Dashboard todoStats={todoStats} todos={todos} />;
            case 'todos':
                return (
                    <div className="todos-view">
                        <div className="todos-header">
                            <h1>Todoリスト</h1>
                            <p>タスクを管理しましょう</p>
                        </div>
                        <div className="todo-input-container">
                            <form className="todo-input-form" onSubmit={addTodo}>
                                <input
                                    type="text"
                                    className="todo-input"
                                    placeholder="新しいタスクを入力"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button type="submit" className="add-button">
                                    追加
                                </button>
                            </form>
                        </div>
                        <TodoList
                            todos={todos.filter(todo => !todo.completed)}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                        {todoStats.total > 0 && (
                            <div className="todo-stats">
                                合計: {todoStats.total} | 完了: {todoStats.completed} | 残り: {todoStats.remaining}
                            </div>
                        )}
                    </div>
                );
            case 'completed':
                return <CompletedTodos todos={todos} onDelete={deleteTodo} onRestore={restoreTodo} />;
            case 'settings':
                return <Settings settings={settings} onSettingsChange={setSettings} />;
            case 'profile':
                return <Profile profile={profile} onProfileUpdate={setProfile} todoStats={todoStats} />;
            default:
                return <Dashboard todoStats={todoStats} todos={todos} />;
        }
    };

    return (
        <div className={`app-container ${settings.darkMode ? 'dark-mode' : ''} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <Sidebar
                activeView={activeView}
                onViewChange={setActiveView}
                todoStats={todoStats}
                isCollapsed={sidebarCollapsed}
                onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            />
            <main className="main-content">
                {renderMainContent()}
            </main>
        </div>
    );
}

// Reactアプリをレンダリング
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
