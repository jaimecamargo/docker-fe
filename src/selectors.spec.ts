import { coreSelector, podLobbySelector, podChatSelector } from "./selectors";
import { State } from "./model";

describe("selectors specs", () => {
  describe("coreSelector", () => {
    it("should return undefined when if feeds state with core equals undefined", () => {
      // Arrange
      const state = {
        core: undefined
      } as State;

      // Act
      const result = coreSelector(state);

      // Assert
      expect(result).toBeUndefined();
    });

    it("should return null when if feeds state with core equals null", () => {
      // Arrange
      const state = {
        core: null
      } as State;

      // Act
      const result = coreSelector(state);

      // Assert
      expect(result).toBeNull();
    });

    it("should return empty object when if feeds state with core equals empty object", () => {
      // Arrange
      const state = {
        core: {}
      } as State;

      // Act
      const result = coreSelector(state);

      // Assert
      expect(result).toEqual({});
    });

    it("should return session info when if feeds state with core equals session info", () => {
      // Arrange
      const state = {
        core: {
          sessionInfo: {
            nickname: "test nickname",
            room: "test room"
          }
        }
      } as State;

      // Act
      const result = coreSelector(state);

      // Assert
      expect(result).toEqual({
        sessionInfo: {
          nickname: "test nickname",
          room: "test room"
        }
      });
    });
  });

  describe("podLobbySelector", () => {
    it("should return undefined when if feeds state with podLobby equals undefined", () => {
      // Arrange
      const state = {
        podLobby: undefined
      } as State;

      // Act
      const result = podLobbySelector(state);

      // Assert
      expect(result).toBeUndefined();
    });

    it("should return null when if feeds state with podLobby equals null", () => {
      // Arrange
      const state = {
        podLobby: null
      } as State;

      // Act
      const result = podLobbySelector(state);

      // Assert
      expect(result).toBeNull();
    });

    it("should return empty object when if feeds state with podLobby equals empty object", () => {
      // Arrange
      const state = {
        podLobby: {}
      } as State;

      // Act
      const result = podLobbySelector(state);

      // Assert
      expect(result).toEqual({});
    });

    it("should return lobby info when if feeds state with podLobby equals lobby info", () => {
      // Arrange
      const state = {
        podLobby: {
          lobby: {
            candidateNickname: "test nickname"
          }
        }
      } as State;

      // Act
      const result = podLobbySelector(state);

      // Assert
      expect(result).toEqual({
        lobby: {
          candidateNickname: "test nickname"
        }
      });
    });
  });

  describe("podChatSelector", () => {
    it("should return undefined when if feeds state with podChat equals undefined", () => {
      // Arrange
      const state = {
        podChat: undefined
      } as State;

      // Act
      const result = podChatSelector(state);

      // Assert
      expect(result).toBeUndefined();
    });

    it("should return null when if feeds state with podChat equals null", () => {
      // Arrange
      const state = {
        podChat: null
      } as State;

      // Act
      const result = podChatSelector(state);

      // Assert
      expect(result).toBeNull();
    });

    it("should return empty object when if feeds state with podChat equals empty object", () => {
      // Arrange
      const state = {
        podChat: {}
      } as State;

      // Act
      const result = podChatSelector(state);

      // Assert
      expect(result).toEqual({});
    });

    it("should return chat info when if feeds state with podChat equals chat info", () => {
      // Arrange
      const state = {
        podChat: {
          chat: {
            searchTerm: "test searchTerm"
          }
        }
      } as State;

      // Act
      const result = podChatSelector(state);

      // Assert
      expect(result).toEqual({
        chat: {
          searchTerm: "test searchTerm"
        }
      });
    });
  });
});
