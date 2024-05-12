import useStore from '../hooks/useStore';
import { setGlobalLoading } from './global';


describe("global store", () => {
    it("should set loading is true", () => {
        const store = useStore();
        setGlobalLoading(true);

        expect(store.Global.isLoading).toBe(true);
    });

    it("should set loading is false", () => {
        const store = useStore();
        setGlobalLoading(false);

        expect(store.Global.isLoading).toBe(false);
    });

    it("should is loading is false by default", () => {
        const store = useStore();

        expect(store.Global.isLoading).toBe(false);
    });
});
