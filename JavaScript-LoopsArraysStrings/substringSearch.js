/**
 * Created by Mario on 24.7.2014 г..
 */
function countSubstringOccur(value) {
    var subStr = value[0];
    var str = value[1];
    var strToLowerCase = str.toLowerCase();
    var re = new RegExp(subStr,'g');
    var count = strToLowerCase.match(re);
    console.log(count.length);
}
countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]);