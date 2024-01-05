# React Redux Counter App

A simple React application demonstrating the use of Redux for state management in a counter app.

## Overview

This project is a basic React application that showcases how to integrate Redux for state management. It includes a simple counter that can be incremented and decremented using Redux actions.

## Features

- Increment and decrement the counter
- State management using Redux

## How It Works

- In Redux, action types are string constants that represent the type of action being performed. These constants are used to avoid typos and ensure consistency in action names throughout the application. In this case, INCREMENT and DECREMENT are action types representing the actions of incrementing and decrementing the counter, respectively.

- A reducer is a function that takes the current state and an action as parameters and returns the new state based on that action. In this example, counterReducer is a simple reducer for managing the state of a counter. It initializes the state to 0 and updates it based on the action type received. If the action type is INCREMENT, it increments the state by 1. If the action type is DECREMENT, it decrements the state by 1. If the action type is not recognized, it returns the current state unchanged.

- Action creators are functions that return action objects. An action object typically has a type property indicating the type of action and any additional data needed for that action. In this example, incAction and decAction are action creators for incrementing and decrementing the counter, respectively. They return action objects with the appropriate type property.

- The Redux store is a central repository for managing the state of a Redux application. It holds the application state, allows access to it, and provides a way to dispatch actions to update the state. Here, createStore is a function provided by Redux to create a store. It takes the counterReducer as an argument, initializing the store with the reducer that will handle state updates based on dispatched actions.

- In summary, this code sets up a basic Redux environment for managing the state of a counter. It defines action types, a reducer to handle state updates, action creators to create actions, and a Redux store to bring them all together. This is a fundamental structure for a Redux application that involves managing state changes in a predictable and centralized manner.



