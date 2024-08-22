const mongoose = require('mongoose');
const Test = require('../models/Test');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const oopsTest = new Test({
  title: 'Object-Oriented Programming',
  topic: 'OOPs', // Updated topic
  description: 'A test covering basic concepts in Object-Oriented Programming.',
  duration: 10, // Set duration to 10 minutes
  marks: 10, // Set total marks to 10 (1 mark per question)
  questions: [
    {
      question: 'What is encapsulation in OOP?',
      options: [
        'Encapsulation is the bundling of data and methods that operate on the data within one unit',
       'Encapsulation is the concept of hiding the implementation details from the user',
        'Encapsulation is the ability of a class to derive properties from another class',
        'Encapsulation is the concept of creating multiple forms of a method or function'
      ],
      correctAnswer: 'Encapsulation is the bundling of data and methods that operate on the data within one unit'
    },
    {
      question: 'What is polymorphism in OOP?',
      options: [
        'Polymorphism is the ability of a function to take multiple forms',
        'Polymorphism allows objects of different classes to be treated as objects of a common super class',
        'Polymorphism is the concept of creating multiple forms of a method or function',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is inheritance in OOP?',
      options: [
        'Inheritance is the ability of one class to inherit properties and methods from another class',
        'Inheritance is the ability to create a new class from an existing class',
        'Inheritance allows for code reuse and the creation of a hierarchy of classes',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is the purpose of an abstract class in OOP?',
      options: [
        'An abstract class cannot be instantiated and is meant to be subclassed',
        'An abstract class is used to define methods that must be implemented by derived classes',
        'An abstract class can have both abstract and concrete methods',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is method overloading in OOP?',
      options: [
        'Method overloading is defining multiple methods with the same name but different parameters',
        'Method overloading is the ability to override a method in a subclass',
        'Method overloading is the ability to create multiple forms of a method or function',
        'None of the above'
      ],
      correctAnswer: 'Method overloading is defining multiple methods with the same name but different parameters'
    },
    {
      question: 'What is method overriding in OOP?',
      options: [
        'Method overriding is the ability of a subclass to provide a specific implementation of a method that is already defined in its superclass',
        'Method overriding is the ability to define multiple methods with the same name but different parameters',
        'Method overriding is the ability to overload a method in the same class',
        'None of the above'
      ],
      correctAnswer: 'Method overriding is the ability of a subclass to provide a specific implementation of a method that is already defined in its superclass'
    },
    {
      question: 'What is an interface in OOP?',
      options: [
        'An interface is a reference type in Java that can contain only constants, method signatures, default methods, static methods, and nested types',
        'An interface is a class that cannot be instantiated',
        'An interface is a class that can only have abstract methods',
        'An interface is a special type of class that can have both abstract and concrete methods'
      ],
      correctAnswer: 'An interface is a reference type in Java that can contain only constants, method signatures, default methods, static methods, and nested types'
    },
    {
      question: 'What is the difference between a class and an object?',
      options: [
        'A class is a blueprint for creating objects, while an object is an instance of a class',
        'A class is a variable, while an object is a function',
        'A class is an instance of an object, while an object is a blueprint for creating classes',
        'There is no difference between a class and an object'
      ],
      correctAnswer: 'A class is a blueprint for creating objects, while an object is an instance of a class'
    },
    {
      question: 'What is the purpose of a constructor in OOP?',
      options: [
        'A constructor is a special method used to initialize objects',
        'A constructor is used to create a new instance of a class',
        'A constructor is used to set initial values for object attributes',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What is the concept of composition in OOP?',
      options: [
        'Composition is a design principle where one class contains a reference to another class',
        'Composition is the ability of a class to inherit properties from another class',
        'Composition is the process of combining multiple classes into one class',
        'Composition is the ability to create multiple forms of a method or function'
      ],
      correctAnswer: 'Composition is a design principle where one class contains a reference to another class'
    }
  ]
});

oopsTest.save()
  .then(() => {
    console.log('OOPs Test saved successfully!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error saving test:', error);
    mongoose.connection.close();
  });
