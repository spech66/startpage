const entries = [
    {
        group: "Social media",
        items: [
            { name: "reddit", url: "https://www.reddit.com", icon: "fab fa-reddit" },
            { name: "Facebook", url: "https://www.facebook.com", icon: "fab fa-facebook" },
            { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
        ]
    }, {
        group: "News",
        items: [
            { name: "reddit", url: "https://www.reddit.com", icon: "fab fa-reddit" },
            { name: "Facebook", url: "https://www.facebook.com", icon: "fab fa-facebook" },
            { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
            { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
            { name: "Instagram", url: "https://www.instagram.com", icon: "fab fa-instagram" },
        ]
    },
];

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

    groupListEntry.remove();
}

$(function() {
    createIconList();
    createGroupList();
});
