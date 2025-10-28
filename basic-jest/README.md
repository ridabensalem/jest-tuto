# jest-tuto
Mocking exersises : 

## 🫏 **Rida’s Exercises**

### 1️⃣ *The Donkey’s Journey*

A donkey travels 12 km uphill carrying salt, but every 3 km it stops and half of the salt dissolves in water when it crosses a stream.
At the start it carries **10 kg** of salt.
Use a `jest.fn()` mock called `calculateRemainingSalt` to calculate how much salt remains at the end of the journey.

```js
const calculateRemainingSalt = jest.fn((initialSalt, streams, lossPerStream) => {
  // write your logic
});
```

---

### 2️⃣ *The Average Speed Trick*

Rida rides a horse  🫏 to town that is far away by 20 KM , if you know that the horse was galloping,   he arrives during around 48min or 0.8 h  what is the averge speed , and mock this function `getAverageSpeed`.
Remember — it’s **not** `(10 + 15)/2` 😉.

```js
const getAverageSpeed = jest.fn((avergeSpeed) => {
  // smart formula here
});
```


---

## 🌆 **Hamza’s Exercises**

### 1️⃣ *Tangier Wind Mystery*

In Tangier, the wind speed changes every hour: [10, 14, 8, 12, 16] km/h.
Use a mock function `getWindAverage` to calculate the **average wind speed** and print `"Calm day"` if average < 12 or `"Windy day"` otherwise.

```js
const getWindAverage = jest.fn((speeds) => {
  // calculate average and return message
});
```

---

### 2️⃣ *Luffy’s Gear Speed*

Luffy increases his punch speed with each gear:
`[20, 40, 60, 120]` punches per second.
Use `calculateBoost` to find the **percentage increase** from Gear 1 to Gear 4.

```js
const calculateBoost = jest.fn((initial, final) => {
  // return percentage increase
});
```

Expected around 500%. 🥊

---

## 🎨 **Wassima’s Exercises**

### 1️⃣ *The Drawing Puzzle*

Wassima draws a triangle with sides 3, 4, 5.
Use `getDrawingArea` to calculate the **area** of the triangle (hint: Heron’s formula).

```js
const getDrawingArea = jest.fn((a, b, c) => {
  // apply Heron's formula
});
```
Heron formula : Area = √(s(s-a)(s-b)(s-c))
---

### 2️⃣ *Rain Drops Collection*

Each hour, rain fills 3 buckets with 4L, 6L, and 8L.
It rains for **5 hours**.
Use `calculateTotalRain` to get the **total liters collected**.

```js
const calculateTotalRain = jest.fn((buckets, hours) => {
  // logic here
});
```

---

## 📚 **Yazid’s Exercises**

### 1️⃣ *Aristotle’s Logic*

Aristo says: “The mean between two extremes is the virtue.”
Given 10 (deficiency) and 40 (excess), calculate the **mean virtue** using `getMeanVirtue`.

```js
const getMeanVirtue = jest.fn((low, high) => {
  // calculate mean
});
```

---

### 2️⃣ *The Book Reader*

Yazid reads 30 pages a day.
Every Sunday, he reads **double** the pages.
How many pages will he read in **4 weeks**?
Use a mock function `calculateReadingTotal`.

```js
const calculateReadingTotal = jest.fn((daily, weeks) => {
  // total pages logic
});
```


