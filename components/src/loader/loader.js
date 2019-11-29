Component({

    properties: {
        iconSize: {
            value: '24px',
            type: String
        },
        duration: {
            value: 1000,
            type: Number
        },
        animationMode: {
            value: 'linear',
            type: String
        },
        iconUrl: {
            value: 'icons/dot.svg',
            type: String
        },

        startRotate: {
            value: false,
            type: Boolean
        },

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