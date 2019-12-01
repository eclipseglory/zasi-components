Page({
    data: {
        products: [
            {
                name: '默认',
                image: '../../../pages/products/images/bottle3x.png'
            },

            {
                rating:4.6,
                name: '马里奥积木',
                description: '带有描述,环保材料，益智娱乐，老少皆宜',
                showDescription: true,
                price: 2008,
                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574651277952&di=1ac6dff63cc31b69b64d7d225e7cceb8&imgtype=0&src=http%3A%2F%2Fimg1.99114.com%2Fgroup10%2FM00%2F1F%2F1E%2FrBADs1opT8OAW9tiAAV20rsKTW0879.jpg',
            },
            {
                mix:true,
                rating:2.2,
                name: '文字图片混合',
                showDescription: false,
                price: 99.9,
                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574666036338&di=246012fe88a16cd12c1579e4be9c6897&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F08%2F31%2F1857c6ae7d11706.jpg',
            },
            {
                rating:5,
                like:true,
                name: '平铺图片不显示背景色',
                price: 80,
                imageMode:"aspectFill",
                regularPrice:200,
                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574666039441&di=12ee9e082a041d5c91edd0019558907a&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2FpopWaterMark%2Fjfs%2Ft703%2F166%2F243164513%2F88553%2Fc24412a9%2F5497b5e6N5cdf3f07.jpg',
            },
        ]
    }
});