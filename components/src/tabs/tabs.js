Component({
    options: {
        pureDataPattern: /^_/
    },
    properties: {
        sticky: {
            value: false,
            type: Boolean
        },
        top: {
            value: '0px',
            type: String
        }
    },

    data: {
        tabs: [],
        activeTab: undefined,
        children: undefined
    },

    methods: {
        activeTab(e) {
            let key = e.target.dataset.key;
            let index = e.target.dataset.index;
            if(index == null) return;
            if (key != null) {
                for (let p in this.data.children) {
                    let c = this.data.children[p];
                    if (c.properties.key == key && c != this.data.activeTab) {
                        let i = this.data.children.indexOf(this.data.activeTab);
                        this.data.tabs[i].statusClass = "deactive-tab";
                        this.data.activeTab.deactive();
                        c.active();
                        i = this.data.children.indexOf(c);
                        this.data.tabs[i].statusClass = "active-tab";
                        this.data.activeTab = c;
                    }
                }
            } else {
                let c = this.data.children[index];
                if (c.properties.key == key && c != this.data.activeTab) {
                    let i = this.data.children.indexOf(this.data.activeTab);
                    this.data.tabs[i].statusClass = "deactive-tab";
                    this.data.activeTab.deactive();

                    this.data.tabs[index].statusClass = "active-tab";
                    c.active();
                    this.data.activeTab = c;
                }
            }
            this.setData({
                tabs: this.data.tabs
            })
        }
    },

    observers: {
        'property': function (property) {

        }
    },

    relations: {
        './tab': {
            type: 'child', // 关联的目标节点应为子节点
            linked: function (target) {
                //第一个默认为active tab
                if (!this.data.activeTab) {
                    this.data.activeTab = target;
                }

                if (this.data.activeTab != target) {
                    if (target.properties.active) {
                        this.data.activeTab.deactive();
                        this.data.activeTab = target;
                    } else {
                        target.deactive();
                    }
                }
            },
            linkChanged: function (target) {
            },
            unlinked: function (target) {
            }
        }
    },

    detached: function () {
    },

    attached: function () {
    },

    ready() {
        let tabChildren = this.getRelationNodes('./tab');
        // this.setData({
        //     tabs: tabChildren
        // });
        this.data.children = tabChildren;
        let tabs = [];
        for (let i = 0; i < tabChildren.length; i++) {
            let child = tabChildren[i];
            let statusClass = "deactive-tab";
            if (child == this.data.activeTab) {
                statusClass = "active-tab"
            }
            tabs.push({
                key: child.properties.key,
                name: child.properties.name,
                statusClass: statusClass
            })
        }
        this.setData({
            tabs: tabs
        })
    }

});