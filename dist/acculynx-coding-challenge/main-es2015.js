(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n  <div>\n    <h3 class='question-header3'>Recent Questions</h3>\n    <app-questions title=\"Recent Questions\" type=\"normal\"></app-questions>\n  </div>\n  <div>\n    <h3 class='question-header3'>Recently Guessed Questions</h3>\n    <app-questions title=\"Recently Guessed Questions\" type=\"guessed\"></app-questions>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/questions.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion *ngIf=\"questionsService.questions && this.type==='normal'\">\r\n  <mat-expansion-panel *ngFor=\"let question of questionsService.questions;  let lastItem = last\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title >\r\n        <h3 innerHtml=\"{{question.title}}\"></h3>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div innerHtml=\"{{question.body}}\"></div>\r\n    <mat-divider *ngIf='!lastItem'></mat-divider>\r\n    <div *ngFor=\"let answer of question.answers\">\r\n      <mat-card class=\"answer\" [ngClass]=\"{'answer' : !show, 'correct' : show && answer.is_accepted, 'incorrect' : show && !answer.is_accepted}\" (click)=\"scorePointsAndUpdate(question, answer)\" matTooltip=\"Click to guess this as the accepted answer.\" matTooltipPosition=\"before\">\r\n        <mat-card-title>Answer:</mat-card-title>\r\n        <mat-card-content>\r\n          <h2 class='blue' *ngIf='showGuesses'>Guess Count: {{answer.guess_count}}</h2>\r\n          <div innerHtml=\"{{answer.body}}\"></div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion *ngIf=\"questionsService.guessedQuestions && this.type==='guessed'\" >\r\n  <mat-expansion-panel *ngFor=\"let guessedQuestion of questionsService.guessedQuestions; let i = index; let lastItem = last\">\r\n    <mat-expansion-panel-header *ngIf=\"i<10\">\r\n      <mat-panel-title >\r\n        <h3 innerHtml=\"{{guessedQuestion.title}}\"></h3>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div innerHtml=\"{{guessedQuestion.body}}\"></div>\r\n    <mat-divider *ngIf='!lastItem'></mat-divider>\r\n    <div *ngFor=\"let answer of guessedQuestion.answers\">\r\n      <mat-card [ngClass]=\"{'answer' : !show, 'correct' : show && answer.is_accepted, 'incorrect' : show && !answer.is_accepted}\" (click)=\"scorePointsAndUpdate(guessedQuestion, answer)\" matTooltip=\"Click to guess this as the accepted answer.\" matTooltipPosition=\"before\">\r\n        <mat-card-title>Answer:</mat-card-title>\r\n        <mat-card-content>\r\n          <h2 class='blue' *ngIf='showGuesses'>Guess Count: {{answer.guess_count}}</h2>\r\n          <div innerHtml=\"{{answer.body}}\"></div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/questions/results-dialog/results-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/questions/results-dialog/results-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{title}}!</h1>\n<mat-dialog-content>\n  <p>Guess Count for this answer: {{data.guess_count}} ({{guessScore}})</p>\n  <p>Number of Votes: {{data.score}} ({{scoreScore}})</p>\n  <p>Correct/Incorrect score: {{title}} ({{correctScore}})</p>\n  <p>Total: {{score}}</p>\n  <h1>Total Score: {{data.totalScore + score}}</h1>\n</mat-dialog-content>\n<mat-dialog-actions class='dialog-button-wrapper'>\n  <div></div>\n  <button mat-raised-button color=\"primary\" (click)=\"closeDialog()\">Okay</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n  grid-gap: 1em;\r\n  margin: 5em;\r\n}\r\n\r\n.question-header3, mat-dialog-container {\r\n  font-family: 'Roboto','Helvetica Neue', sans-serif;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICBncmlkLWdhcDogMWVtO1xyXG4gIG1hcmdpbjogNWVtO1xyXG59XHJcblxyXG4ucXVlc3Rpb24taGVhZGVyMywgbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'acculynx-coding-challenge';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _questions_questions_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./questions/questions.service */ "./src/app/questions/questions.service.ts");
/* harmony import */ var _questions_results_dialog_results_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./questions/results-dialog/results-dialog.component */ "./src/app/questions/results-dialog/results-dialog.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_15__["QuestionsComponent"],
            _questions_results_dialog_results_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ResultsDialogComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material___WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
        ],
        entryComponents: [_questions_results_dialog_results_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ResultsDialogComponent"]],
        providers: [_questions_questions_service__WEBPACK_IMPORTED_MODULE_16__["QuestionsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel, mat-card-content {\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.answer {\r\n  background-color: white;\r\n}\r\n\r\n.answer:hover {\r\n  background-color: rgba(200,200,200,.75);\r\n}\r\n\r\n.answer:active {\r\n  background-color: rgba(0,0,0, .45);\r\n  transition: 0.1s;\r\n}\r\n\r\n.answer, .correct, .incorrect {\r\n  transition: 0.3s;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.correct {\r\n  background-color: #9bff8c;\r\n}\r\n\r\n.incorrect {\r\n  background-color: #ff8c8c;\r\n}\r\n\r\n.blue {\r\n  color: #006084;\r\n  transition: 0.3s;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWV4cGFuc2lvbi1wYW5lbCwgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xyXG59XHJcblxyXG4uYW5zd2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYW5zd2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwyMDAsMjAwLC43NSk7XHJcbn1cclxuXHJcbi5hbnN3ZXI6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuNDUpO1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuXHJcbi5hbnN3ZXIsIC5jb3JyZWN0LCAuaW5jb3JyZWN0IHtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4uY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliZmY4YztcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGM4YztcclxufVxyXG5cclxuLmJsdWUge1xyXG4gIGNvbG9yOiAjMDA2MDg0O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions.service */ "./src/app/questions/questions.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _results_dialog_results_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results-dialog/results-dialog.component */ "./src/app/questions/results-dialog/results-dialog.component.ts");





let QuestionsComponent = class QuestionsComponent {
    constructor(questionsService, dialog) {
        this.questionsService = questionsService;
        this.dialog = dialog;
        this.show = false;
        this.showGuesses = false;
        this.questions = [];
        this.guessedQuestions = [];
    }
    // dialog box opened when clicking an answer
    openDialog(question) {
        const dialogRef = this.dialog.open(_results_dialog_results_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ResultsDialogComponent"], {
            data: question
        });
        dialogRef.afterClosed().subscribe(result => {
            this.show = false;
            this.showGuesses = false;
            this.questionsService.score += result.totalScore;
        });
    }
    // gets the most recent questions & answers
    getAllQuestions() {
        this.questionsService.getAllQuestions();
    }
    // scores points, appends answer with timestamp and guesscount, opens dialog.
    scorePointsAndUpdate(question, answer) {
        this.questions = this.questionsService.questions;
        !answer.guess_count ? answer.guess_count = 1 : answer.guess_count += 1;
        const indexAnswer = question.answers.findIndex(x => x.answer_id === answer.answer_id);
        question.answers[indexAnswer] = answer;
        question.timeStamp = new Date().getTime();
        const indexQuestion = this.questions.findIndex(x => x.question_id === question.question_id);
        this.questions[indexQuestion] = question;
        this.guessedQuestions = this.questionsService.guessedQuestions;
        const indexGuessedQuestion = this.guessedQuestions.findIndex(x => x.question_id === question.question_id);
        indexGuessedQuestion >= 0
            ? this.guessedQuestions[indexGuessedQuestion] = question
            : this.guessedQuestions = [question, ...this.guessedQuestions];
        this.questionsService.guessedQuestions = this.guessedQuestions;
        this.questionsService.updateQuestion(question);
        this.questionsService.questions = this.questions;
        this.show = true;
        this.showGuesses = true;
        this.openDialog({
            score: answer.score,
            guess_count: answer.guess_count,
            is_accepted: answer.is_accepted,
            totalScore: this.questionsService.score
        });
    }
    ngOnInit() {
        this.getAllQuestions();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionsComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionsComponent.prototype, "title", void 0);
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/questions.component.html"),
        styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], QuestionsComponent);



/***/ }),

/***/ "./src/app/questions/questions.service.ts":
/*!************************************************!*\
  !*** ./src/app/questions/questions.service.ts ***!
  \************************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let QuestionsService = class QuestionsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://localhost:3000/';
        this.score = 0;
        this.questions = [];
        this.guessedQuestions = [];
    }
    /* retrieves a list of questions from stackexchange api and a list of recently guessed questions from MongoDB db
    *  Each lists answers array gets shuffled.
    */
    getAllQuestions() {
        const questionsResult = this.http.get(`https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=creation&accepted=True&answers=2&site=stackoverflow&filter=!)rh-4Rv3X0MXqJcCydZX`);
        const guessedQuestionsResult = this.http.get(`/questions/guessed`);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([questionsResult, guessedQuestionsResult]).subscribe(results => {
            this.questions = results[0].items;
            this.questions = this.shuffleNestedArrays(this.questions);
            // let qArr = results[0].items.$.questions;
            // qArr = this.shuffle(qArr);
            this.guessedQuestions = results[1];
            this.guessedQuestions = this.shuffleNestedArrays(this.guessedQuestions);
            this.updateLocalQuestions();
            return results;
        });
    }
    // updates a question with current question values.
    updateQuestion(question) {
        return this.http.patch(`/questions/update`, question).subscribe(data => { });
    }
    // updates local questions array with current question values.
    updateLocalQuestions() {
        this.guessedQuestions.forEach(g => {
            this.questions.forEach(q => {
                if (q.question_id === g.question_id) {
                    const index = this.questions.findIndex(x => x.question_id === g.question_id);
                    this.questions[index] = g;
                }
            });
        });
        return;
    }
    // Shuffles child array in each parent array
    shuffleNestedArrays(array) {
        array.forEach((x, i) => {
            array[i].answers = this.shuffle(array[i].answers);
        });
        return array;
    }
    // shuffles items in array.
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
        return array;
    }
};
QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], QuestionsService);



/***/ }),

/***/ "./src/app/questions/results-dialog/results-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/questions/results-dialog/results-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-content {\r\n  text-align: right;\r\n  font-family: 'Roboto','Helvetica Neue', sans-serif;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  font-family: 'Roboto','Helvetica Neue', sans-serif;\r\n}\r\n\r\nbutton {\r\n  float: right;\r\n}\r\n\r\n.dialog-button-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 80% 20%;\r\n  margin-right: 1em;\r\n  margin-bottom: 0.25em;\r\n  padding: 0;\r\n}\r\n\r\nmat-dialog-container {\r\n  font-family: 'Roboto','Helvetica Neue', sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb25zL3Jlc3VsdHMtZGlhbG9nL3Jlc3VsdHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9xdWVzdGlvbnMvcmVzdWx0cy1kaWFsb2cvcmVzdWx0cy1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZGlhbG9nLWJ1dHRvbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/questions/results-dialog/results-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/questions/results-dialog/results-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResultsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsDialogComponent", function() { return ResultsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ResultsDialogComponent = class ResultsDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    // formats the data to display score
    formatData() {
        let score = 0;
        let correctScore = '';
        let guessScore = '';
        let scoreScore = '';
        this.totalScore = this.data.totalScore;
        this.data.is_accepted ? this.title = 'Correct' : this.title = 'Incorrect';
        if (this.data.is_accepted) {
            this.title = 'Correct';
            score += 5;
            correctScore = '+5';
        }
        else {
            this.title = 'Incorrect';
            score -= 10;
            correctScore = '-10';
        }
        if (this.data.score < 0) {
            score--;
            scoreScore = '-1';
        }
        else if (this.data.score > 0 && this.data.score < 10) {
            score++;
            scoreScore = '+1';
        }
        else {
            score += 5;
            scoreScore = '+5';
        }
        if (this.data.guess_count < 5) {
            score += 1;
            guessScore = '+1';
        }
        else if (this.data.guess_count >= 5 && this.data.guess_count < 10) {
            score += 2;
            guessScore = '+2';
        }
        else {
            score += 5;
            guessScore = '+5';
        }
        this.score = score;
        this.correctScore = correctScore;
        this.scoreScore = scoreScore;
        this.guessScore = guessScore;
        this.totalScore += this.score;
    }
    // closes dialog and sends the current totalscore.
    closeDialog() {
        this.dialogRef.close({ totalScore: this.totalScore });
    }
    ngOnInit() {
        this.formatData();
    }
};
ResultsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results-dialog',
        template: __webpack_require__(/*! raw-loader!./results-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/questions/results-dialog/results-dialog.component.html"),
        styles: [__webpack_require__(/*! ./results-dialog.component.css */ "./src/app/questions/results-dialog/results-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], ResultsDialogComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nick\Documents\Projects\Acculynx\acculynx-coding-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map