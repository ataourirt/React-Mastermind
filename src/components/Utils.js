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
        // console.log("numberOfGoodColors : " +Utils.numberOfGoodColors(params));
        // console.log("numberOfGoodPosition : "+Utils.numberOfGoodPosition(params));

        // console.log("//////////////////////////////////:");
        return Utils.numberOfGoodColors(params) === 4 && Utils.numberOfGoodPosition(params) === 4;
    }

    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
};
