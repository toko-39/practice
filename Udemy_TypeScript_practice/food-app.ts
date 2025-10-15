// class Score {
//     get totalScore(){
//         const foods = Foods.getInstance();
//         return foods.activeElementsScore.reduce((sum, score) => sum + score, 0);
//     }
//     render(){
//         document.querySelector('.score__number')!.textContent = String(this.totalScore);
//     }
// }

// class Food {
//     private static instance: Food;
//     constructor(public element: HTMLDivElement){
//         element.addEventListener('click', this.clickEventHandler.bind(this));
//     }
//     clickEventHandler(){
//         this.element.classList.toggle('food--active');
//         const score = new Score();
//         score.render();
//     }
// }

// class Foods { 
//     elements = document.querySelectorAll<HTMLDivElement>('.food');
//     private _activeElements: HTMLDivElement[] = [];
//     private _activeElementsScore: number[] = [];
//     get activeElements(){
//         this._activeElements = [];
//         this.elements.forEach(element => {
//             if (element.classList.contains('food--active')) {
//                 this._activeElements.push(element);
//             }
//         })
//         return this._activeElements;
//     }
//     get activeElementsScore(){
//         this._activeElementsScore = [];
//         this._activeElements.forEach(element => {
//             const foodScore = element.querySelector('.food__score');
//             if (foodScore) {
//                 this._activeElementsScore.push(Number(foodScore.textContent));
//             }
//         })
//         return this._activeElementsScore;
//     }
//     private constructor(){
//         this.elements.forEach(element => {
//             new Food(element);
//         });
//     }
//     static getInstance(){
//         if(!Foods.instance){
//             Foods.instance = new Foods();
//         }
//         return Foods.instance;
//     }
// }

// const foods = Foods.getInstance();