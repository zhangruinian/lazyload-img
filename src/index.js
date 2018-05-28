class LazyLoad {
    constructor(options = {}) {
        this.options = {
            dataSrc: 'src',
            root: null, // 根元素 必须是父元素 document时可改为 null
            rootMargin: 0, // 间距,多少px之前就开始调用
            threshold: [0] // 调用次数 0-1
        }
        this.io = null
        this._elements = []
        Object.assign(this.options, options)
        this._init()
    }

    _init() {
        console.log(this.options)

        let {dataSrc} = this.options
        let root = this.options.root || document

        this._setObserver()
        this._elements = Array.from(root.querySelectorAll(`img[data-${dataSrc}]`))
        this._checkImgs()
    }

    _setObserver() {
        if(!('IntersectionObserver' in window)){
            return console.warn('当前浏览器不支持IntersectionObserver或没有加入相应polyfill ')
        }

        this.io = new IntersectionObserver(entries => {
            console.log(entries)
            for (const entry of entries) {
                const el = entry.target
                const intersectionRatio = entry.intersectionRatio
                if (intersectionRatio > 0 && intersectionRatio <= 1) {
                    console.log(`${el.dataset.src}进入可视区..`)
                    this._loadImg(el)
                }

            }

        }, this.options)
    }

    _loadImg(el) {
        let self = this
        const source = el.dataset.src
        el.src = source
        // el.removeAttribute('data-src')
        // 加载完成之后 不再observer
        el.onload = el.onerror = function () {
            console.log(`${this.dataset.src}图片加载完成`)
            self.io.unobserve(el)
        }
    }

    _checkImgs() {
        if(!this._io){
            this.update()
        }
        this._elements.forEach(item => this.io.observe(item))
    }

    update() {
        // fallback处理
        if(this.io){
            return
        }
        this._elements.forEach((el) =>{
            this._loadImg(el)
        })
    }

    destroy() {
        this.io.disconnect()
        this.io = null
        this.options = null
    }
}

// export default LazyLoad


