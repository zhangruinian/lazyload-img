class LazyLoad {
    constructor(options = {}) {
        this.options = {
            root: null, // 根元素 必须是父元素
            rootMargin: 0, // 间距,多少px之前就开始调用
            threshold: [0] // 调用次数 0-1
        }
        this.io = null
        Object.assign(this.options, options)
        this._init()
    }

    _init() {
        var self = this
        console.log(this.options)
        this.io = new IntersectionObserver(entries => {
            console.log(entries)
            for (const entry of entries) {
                const el = entry.target
                const intersectionRatio = entry.intersectionRatio
                if (intersectionRatio > 0 && intersectionRatio <= 1) {
                    this._loadImg(el)
                    console.log(`${el.dataset.src}进入可视区..`)
                }
                // 加载完成之后 不再observer
                el.onload = el.onerror = function () {
                    console.log(`${this.dataset.src}图片加载完成`)
                    self.io.unobserve(el)
                }
            }

        }, this.options)

        this._checkImgs()
    }

    _loadImg(el) {
        const source = el.dataset.src
        el.src = source
        // el.removeAttribute('data-src')
    }

    _checkImgs() {
        // ${this.options.root}
        const imgs = Array.from(document.querySelectorAll(`img[data-src]`)
        )
        imgs.forEach(item => this.io.observe(item))
    }

    _destroy() {
        this.io.disconnect()
        this.io = null
        this.options = null
    }
}

// export default LazyLoad


