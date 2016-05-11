describe('app', function () {
    'use strict';

    var app = window.app;

    xxdescribe('assignToSwimmingCourse', function () {
        xit('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'John", age: 20, course: 'adults'
            });
        });
        iit('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: ", age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        })
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'John', age: 0, course: '5'
            }))

        it('shouldnt assign person below 12 to kids groupe', function())    {

            }
    });
});


