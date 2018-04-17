// import { REFUSED } from "dns";

export default class Utils {

    static answers = [];

    static numberOfGoodColors(params) {

        var count = 0;

        params.forEach(function (element) {

            Utils.answers.forEach(function (elm) {
                if (elm == element) {
                    count++
                }
            })
        });


        return count;
    };

    static numberOfGoodPosition(params) {

        var count = 0;

        params.forEach(function (element, idx) {
            if (element == Utils.answers[idx]) {
                count++
            }
        });

        return count;
    };

    static isWin(params) {
        return Utils.numberOfGoodColors(params) == 4 && Utils.numberOfGoodPosition(params) == 4;
    }
};
