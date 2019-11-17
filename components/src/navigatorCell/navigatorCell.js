Component({

    externalClasses: [
        'ext-title-class',
        'ext-description-class',
        'ext-row-class'
    ],

    properties: {
        imageSize: {
            value: '1.5em',
            type: String
        },
        url: {
            value: null,
            type: String
        },
        imageUrl: {
            value: null,
            type: String
        },
        title: {
            value: null,
            type: String
        },
        description: {
            value: null,
            type: String
        },
        padding: {
            value: '2.5vw 5vw',
            type: String
        }
    },

    data: {},

    methods: {},

    observers: {},

    detached: function () {
    },

    attached: function () {
    },

    ready() {
    }

});