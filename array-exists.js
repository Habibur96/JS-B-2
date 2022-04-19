
function megafriend(friends) {
    if (Array.isArray(friends) == false) {
        return "provide ana array";
    }
    let mega = friends[0]
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['noyon', 'rana', 'robin', 'jahid', 'nahid']

const myBigBuddy = megafriend(1245);
//const myBigBuddy = megafriend(friends);

