import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ExampleButton extends Vue {
  public created() {
    console.log('created invoked');
  }
}
