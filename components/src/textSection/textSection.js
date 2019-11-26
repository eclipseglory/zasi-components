Component({
    externalClasses: [
        'ext-class',
        'ext-image-container-class',
        'ext-content-class',
        'ext-title-class',
        'ext-readmore-class'
    ],
    properties: {
        readMore: {
            value: '更多详情',
            type: String
        },
        url: {
            value: null,
            type: String
        },
        mode: {
            value: '',
            type: String
        },
        title: {
            value: '标题',
            type: String
        },

        content: {
            value: '内容',
            type: String
        },

        image: {
            value: '',
            type: String
        },

        imageWidthPercent: {
            value: 0.3,
            type: Number
        },
        left: {
            value: true,
            type: Boolean
        },
        textLines: {
            value: 7,
            type: Number
        }
    }
});