// import { REFUSED } from "dns";

export default class Utils {

    static answers = [];

    static numberOfGoodColors(params) {

        var count = 0;

        params.forEach(function (element) {

            // console.log("my element:" + element);

            Utils.answers.forEach(function (elm) {

                // console.log("elm=" + elm);

                if (elm === element) {
                    // console.log("count:" + count);
                    count++
                }
            })
        });


        return count;
    };

    static numberOfGoodPosition(params) {

        var count = 0;

        params.forEach(function (element, idx) {
            if (element === Utils.answers[idx]) {
                count++
            }
        });

        return count;
    };

    static isWin(params) {
        // console.log("good colors : ")
        console.log("numberOfGoodColors : " +Utils.numberOfGoodColors(params));
        console.log("numberOfGoodPosition : "+Utils.numberOfGoodPosition(params));

        // console.log("//////////////////////////////////:");
        return Utils.numberOfGoodColors(params) === 4 && Utils.numberOfGoodPosition(params) === 4;
    }
};
