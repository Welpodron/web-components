// create interface to extend promise
interface DeferredPromise<T> extends Promise<T> {
  resolve: () => void;
}

export type Deferred = DeferredPromise<void>;

export const deferredPromise = () => {
  let outsideResolver: () => void;

  const promise: Partial<Deferred> = new Promise((innerResolver) => {
    outsideResolver = innerResolver;
  });
  // so if outsideResolver is called: outsideResolver() then promise will be fulfilled

  // add new property to returing promise so it can be finnised/fulfilled outside
  // name of new property can be whatever but not 'finally' ???

  promise.resolve = () => {
    outsideResolver();
  };

  return <Deferred>promise;
};
