Component({
    properties: {
        key: {
            value: undefined,
            type: String
        },

        active:{
            value:false,
            type:Boolean
        },
        display: {
            value: 'none',
            type: String
        },
        name: {
            value: '选项',
            type: String
        }
    },

    data: {
        tabClass : undefined
    },

    methods: {
        deactive() {
            this.setData({
                "tabClass": "deactive-tab"
            })
        },

        active() {
            this.setData({
                "tabClass": "active-tab"
            })
        }
    },

    observers: {
        'property': function (property) {

        }
    },

    relations: {
        './tabs': {
            type: 'parent', // 关联的目标节点应为父节点
            linked: function (target) {
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
    }

});