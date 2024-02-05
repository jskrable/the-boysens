interface DOMAction<T> {
  method: 'scrollTo';
  args: T;
}

export type { DOMAction };
