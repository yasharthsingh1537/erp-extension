# ERP Redesign

A modern, student-focused redesign of the ERP student portal.

The project starts as a Chrome extension that reads data from the existing ERP website and renders a redesigned interface on top of it.

## 🚧 Project Status

**Early Development**

The Chrome extension foundation is working. The next step is building parsers that extract useful data from the existing ERP pages and feeding that data into the React interface.

## 🎯 Goals

The goal of this project is to make the ERP:

- Easier to navigate
- Cleaner and more modern
- Faster to use
- More responsive
- More student-friendly
- Consistent across different ERP sections

The project will initially focus on a Chrome extension.

A mobile application may be developed later using the same general data and UI concepts.

## 🧠 How It Works

The project does not require direct access to the ERP database.

Instead, the extension works with the student's existing authenticated ERP session.

The basic flow is:

```text
  ERP Website
       ↓
    HTML DOM
       ↓
     Parser
       ↓
   Clean Data
       ↓
   React App
       ↓
 Redesigned UI
```
