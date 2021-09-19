import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'; // 暫定（main.tsに記述しても認識されない）

@Component
export default class NewsTable extends Vue {
    @Prop() public news!: News[];

    public mounted(): void {
        axios.get('http://localhost:8080/news')
        .then((res) => {
            this.news = res.data;
        });
    }

    public data() {
        return {
            news: this.news, // "this: this.news"でも動くのはなぜ？
        };
    }
}

interface News {
    title: string;
    url: string;
}
