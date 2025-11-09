### 🧠 What I Learned

- It’s important to define **interface types** so that every component expects consistent and well-defined data structures.  

- When using `useState` with an **empty array** as the default value, we should provide a **generic type**. Otherwise, TypeScript won’t know what kind of elements the array will contain.  
  ```tsx
  const [items, setItems] = useState<ItemType[]>([]);

 -When initializing `useState` with **null**, we also need to use a generic type or a union type. Otherwise, TypeScript will assume the state will always be null.
  ```tsx
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

 -The same principle applies to `useRef` — when the initial value is `null`, we need to explicitly specify the type so TypeScript knows what the reference will point to later on.
  ```tsx
  const inputRef = useRef<HTMLInputElement | null>(null);
