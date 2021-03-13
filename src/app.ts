function DecoratorFactory(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = value;
  };
}

export class App {
  @DecoratorFactory(true)
  public run(): boolean {
    console.log('TS Playground!');
    return true;
  }
}

const app = new App();
app.run();