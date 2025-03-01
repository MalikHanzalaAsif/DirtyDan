import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
    persist(
        (set) => ({
            cart: [],

            addToCart: (item) =>
                set((state) => {
                    const existingItem = state.cart.find((i) => i.id === item.id && i.color === item.color && i.size === item.size);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((i) =>
                                i.id === item.id && i.color === item.color && i.size === item.size
                                    ? { ...i, quantity: Number(i.quantity) + 1 }
                                    : i
                            ),
                        };
                    } else {
                        return { cart: [...state.cart, item] };
                    }
                }),

            decreaseQuantity: (item) =>
                set((state) => {
                    const existingItem = state.cart.find((i) => i.id === item.id && i.color === item.color && i.size === item.size);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((i) =>
                                i.id === item.id && i.color === item.color && i.size === item.size
                                    ? { ...i, quantity: Math.max(Number(i.quantity) - 1, 1)}
                                    : i
                            ),
                        };
                    } else {
                        return { cart: [...state.cart, item] };
                    }
                }),

            removeFromCart: (itemId, color, size) =>
                set((state) => ({
                    cart: state.cart.filter((item) => !(item.id === itemId && item.color === color && item.size === size)),
                })),

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'DirtyDan-Store',
            partialize: (state) => ({ cart: state.cart })
        }
    )
);

export default useStore;
