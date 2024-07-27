import useStore from '../hooks/useStore';
import {
    cleanCurrentUser,
    resetUserStore,
    setApiKey,
    setCurrentUser
} from './user';

describe("UserStore", () => {
    afterEach(() => {
       resetUserStore(); 
    });

    it("should set current user", () => {
        const store = useStore();
        setCurrentUser({
            name: 'Welen'
        });

        expect(store.User.currentUser.name).toBe('Welen');
    });

    it("should set apikey on current user", () => {
        const store = useStore();
        setApiKey('123');

        expect(store.User.currentUser.apikey).toBe('123');
    });

    it("should clean current user", () => {
        const store = useStore();
        setCurrentUser({
            name: 'Welen'
        });

        expect(store.User.currentUser.name).toBe('Welen');
        
        cleanCurrentUser();

        expect(store.User.currentUser.name).toBeFalsy();
    });

});