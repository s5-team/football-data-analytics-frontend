import { Component, Vue } from 'vue-property-decorator';
@Component
export default class ExampleButton extends Vue {
  private busu: string = 'hiraba';

  public created(): void {
    console.log('created invoked' + this.busu);
  }
}
