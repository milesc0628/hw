"use strict";

let layout = [
    {
        width: "600px",
        height: "170px",
        color: "blue",
        paragraph: "Cameron has lived in St. Adelaide all of his life. The town has always been strange. Everyone here acts as if they are disconnected from reality, and they all dedicate their lives to serving the town, to the point that they don’t talk about much else. The only reason he can notice its strangeness is because he was born outside of it; his parents escaped and gave birth to him outside, but returned soon after and only spoke to Cameron about it once. He doesn’t know exactly what’s going on, but nevertheless, he’s chosen to not make it his business. The townspeople pay him no mind, so he’s chosen to just roll with it."
    },
    {
        width: "600px",
        height: "90px",
        color: "blue",
        paragraph: "That was until Casey moved in next door. They’d never met beforehand, but because of that Cameron knew he was an outsider. He’s seen the looks outsiders get in this town, and eventually he never sees them again. They barely get people visiting because the town is hard to find to begin with. Additionally, it’s hard to leave."
    },
    {
        width: "600px",
        height: "130x",
        color: "blue",
        paragraph: "Cameron chose to befriend Casey, who happily went along with it. He now has a new drive to help get him out of there. He isn’t sure why he’s so motivated after years of feeling detached, but he knows he doesn’t want to be complicit in any disturbing behavior from this town. He also starts to get hope that he, too, <strong>can escape.</strong>"
    },
    {
        width: "600px",
        height: "170px",
        color: "blue",
        paragraph: "Cameron and Casey work together to uncover the mysteries of this town so that they can get out. What they discover is that anyone who was born in the town falls under a curse that binds them to the town. While it is possible to escape, it is difficult to truly break off (as seen with Cameron’s parents). The townspeople believe that the town is lovely and anyone born outside of it must be corrupt. The townspeople <strong>sacrifice any outsiders to an entity</strong> which they worship, which they believe to be a holy figure, but is actually a monstrous creature that was created by the townspeople’s hatred and twisted hearts."
    },
    {
        width: "600px",
        height: "130px",
        color: "blue",
        paragraph: "Cameron and Casey learn through all of their research and experience together how to defeat the monster, effectively breaking the curse the town fell under. They also grow together at this time as they figure out what they want out of life, after being put into boxes by everyone around them who told them what they should do or how they should live their lives. They then are able to leave together and start a new fulfilling life, finally able to chase their dreams."
    }
];

let grid1 = document.getElementById("grid1");

layout.forEach(element => {
    let newDiv = document.createElement("div");
    newDiv.style.width = element.width;
    newDiv.style.height = element.height;
    newDiv.style.backgroundColor = element.color;
    newDiv.style.marginBottom = "30px";
    let pTag = document.createElement("p");
    pTag.innerHTML = element.paragraph;
    newDiv.append(pTag);
    grid1.append(newDiv);
});