import 'egg';

declare module 'egg' {
  interface Application {
    model: any
  }
}