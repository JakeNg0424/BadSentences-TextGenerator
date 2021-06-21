const fillers = {
    pre: ["An Apple A Day", "Same Sex Foreplay", "Living in San Jose", "Kill, Murder, and Slay", "Being a Prey", "Having a Threeway", "Writing an Essay", "Becoming a CIA", "USA! USA! USA!"],
    post: ["Keeps the Doctor Away", "Means You're Gay", "Gets You Killed by a Stingray", "Leads You to Being Betray", "Turns You into Someone's Entree", "is Awkward with your Divorcee", "Ends You like Hemingway", "is a Normal Monday", "Accidentally Makes You the KKK"]
};

const sentence = `$pre $post`;

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
    let options = fillers[name];
    if (options) {
        return options[Math.floor(Math.random() * options.length)];
    } else {
        return `<UNKNOWN:${name}>`;
    }
}

function generate() {
    let story = sentence;
    while (story.match(slotPattern)) {
        story = story.replace(slotPattern, replacer);
    }

    /* global box */
    box.innerText = story;
}

/* global clicker */
clicker.onclick = generate;

generate();
