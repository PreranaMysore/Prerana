'use strict';

let moment = require('moment');

// Converts date to timestamp in <hours:minutes:seconds> for Trip Explorer Page
let getTimeStampInSeconds = function(date){
    return moment(date).format('hh:mm:ss');
};

// Converts date to timestamp in <hours:minutes Am or Pm> for Trip Explorer Page
let getTimeStampInAmOrPm = function(date){
    return moment(date).format('hh:mm a');
};

// Formats date in MM/DD/YY
let getDateFormat = function(date){
    return moment(date).format('MM/DD/YY');
};

let convertIntegerToDate = function(int){
    return moment(int).format('DD-MM-YY');
}

// Formats date and timeStamp in <MM/DD/YY hours:minutes Am or Pm>
let getDateAndTimeStampFormat = function(date){
    return moment(date).format('MM/DD/YY hh:mm a');
};

// Converts date to day
let getDay = function(date){
    return moment(date).format('dddd');
};

// Converts date to day
let getMonth = function(date){
    return moment(date).format('MMMM');
};

// Provides time difference in Minutes
let getDifferenceinMinutes = function(timeDiff){
    return ((timeDiff)/ (60 * 1000) % 60);
};

// Provides time difference in Hours
let getDifferenceinHours = function(timeDiff){
    return ((timeDiff)/ (60 * 60 * 1000));
};

// Provides time Format in AM or PM
let getTimeFormat = function(date){
    return moment(date).format('a');
};

// Returns day of Week
let getDayOfWeek = function(date){
    let day;
    switch(getDay(date)){
        case 'Monday':
            day = 1;
            break;
        case 'Tuesday':
            day = 2;
            break;
        case 'Wednesday':
            day = 3;
            break;
        case 'Thursday':
            day = 4;
            break;
        case 'Friday':
            day = 5;
            break;
        case 'Saturday':
            day = 6;
            break;
        case 'Sunday':
            day = 7;
            break;
        default:
            day = 0;
    }
    return day;
};

// Returns Month of year
let getMonthOfYear = function(date){
    let month;
    switch(getMonth(date)){
        case 'January':
            month = 1;
            break;
        case 'Febraury':
            month = 2;
            break;
        case 'March':
            month = 3;
            break;
        case 'April':
            month = 4;
            break;
        case 'May':
            month = 5;
            break;
        case 'June':
            month = 6;
            break;
        case 'July':
            month = 7;
            break;
        case 'August':
            month = 8;
            break;
        case 'September':
            month = 9;
            break;
        case 'October':
            month = 10;
            break;
        case 'November':
            month = 11;
            break;
        case 'December':
            month = 12;
            break;
    }
    return month;
};

// Returns Day and Night
let getDayAndNight = function(date){
    let format;
    switch(getTimeFormat(date)){
        case 'am':
            format = 1;
            break;
        case 'pm':
            format = 2;
            break;
    }
    return format;
};

// Converts a given Date to Integer
let convertDateToInteger = function() {
    return moment(new Date()).valueOf();
};

let checkDaysDiffForStalk = function (date) {
    return Math.round(moment.duration(moment(new Date()).diff(moment(date))).asDays()) - 1;
};

let checkDaysDiffForArrival = function (date) {
    return Math.round(moment.duration(moment(date).diff(moment(new Date()))).asDays()) + 1;
};

module.exports = {
    getDifferenceinMinutes:getDifferenceinMinutes,
    getDifferenceinHours:getDifferenceinHours,
    getTimeFormat:getTimeFormat,
    getDay:getDay,
    getMonth:getMonth,
    getDayOfWeek:getDayOfWeek,
    getMonthOfYear:getMonthOfYear,
    getDayAndNight:getDayAndNight,
    getTimeStampInAmOrPm: getTimeStampInAmOrPm,
    getDateFormat : getDateFormat,
    getDateAndTimeStampFormat: getDateAndTimeStampFormat,
    getTimeStampInSeconds: getTimeStampInSeconds,
    convertDateToInteger: convertDateToInteger,
    convertIntegerToDate : convertIntegerToDate,
    checkDaysDiffForStalk :checkDaysDiffForStalk,
    checkDaysDiffForArrival : checkDaysDiffForArrival
};
