// Define the groups and items. Groups are only shown in group mode.
const entries = [
    {
        group: "Social media",
        items: [
            { name: "reddit", url: "https://www.reddit.com", icon: "fab fa-reddit" },
            { name: "Facebook", url: "https://www.facebook.com", icon: "fab fa-facebook" },
            { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
            { name: "Spotify", url: "https://www.spotify.com", icon: "fab fa-spotify" },
        ]
    }, {
        group: "Utilities",
        items: [
            { name: "Confluence", url: "https://www.atlassian.com/software/confluence", icon: "fab fa-confluence" },
            { name: "D&D", url: "https://dnd.wizards.com/", icon: "fab fa-d-and-d" },
            { name: "GitHub", url: "https://www.github.com", icon: "fab fa-github" },
            { name: "Medium", url: "https://www.medium.com", icon: "fab fa-medium" },
            { name: "Amazon", url: "https://www.amazon.de", icon: "fab fa-amazon" },
        ]
    },
];

// Switch between group mode (true) and icon only mode (false)
const groupMode = false;

// Text above the search box
const welcomeText = "Startpage!";

//#############################################################################
//# Do not change anything below this line
//#############################################################################

createIconList = () => {
    let iconList = $("#iconList");
    let iconListEntry = $("#iconListEntry");

    for(const groupEntry of entries) {
        for(const item of groupEntry.items) {
            const ileClone = iconListEntry.clone();
            const idName = (groupEntry.group + item.name).replace(/[^A-Za-z0-9]/g, 'x');
            ileClone.find(".iconLink").each(function() { (this).href = item.url });
            ileClone.find(".iconIcon").addClass(item.icon);
            ileClone.find(".iconLink")[1].innerText = item.name;
            ileClone.prop("id", "iconListEntry" + idName).appendTo(iconList);
        }
    }

    // Orginal entry is only for cloning. Remove it.
    iconListEntry.remove();
}

createGroupList = () => {
    let groupList = $("#groupList");
    let groupListEntry = $("#groupListEntry");

    for(const groupEntrie of entries) {
        const gleClone = groupListEntry.clone();
        const idName = groupEntrie.group.replace(/[^A-Za-z0-9]/g, 'x');
        gleClone.prop("id", "groupListEntry" + idName).appendTo(groupList);
    }

    // Orginal entry is only for cloning. Remove it.
    groupList.remove();
}

$(function() {
    if(groupMode) {
        createGroupList();
        $("#iconList").remove();
    } else {
        createIconList();
        $("#groupList").remove();
    }

    $(".welcomeText")[0].innerText = welcomeText;
});
