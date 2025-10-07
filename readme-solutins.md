

## 🫏 **Rida’s Exercises**

### 1️⃣ *The Donkey’s Journey*

Every stream dissolves half the salt.
He crosses 3 streams (at 3, 6, and 9 km).

```js
const calculateRemainingSalt = jest.fn((initialSalt, streams) => {
  let salt = initialSalt;
  for (let i = 0; i < streams; i++) {
    salt = salt / 2; // half dissolves each time
  }
  return salt;
});

console.log(calculateRemainingSalt(10, 3)); // 🧂 -> 1.25 kg
```

✅ **Answer:** 1.25 kg remaining.

---
to be filled later for the average speed 

---

## 🌆 **Hamza’s Exercises**

### 1️⃣ *Tangier Wind Mystery*

```js
const getWindAverage = jest.fn((speeds) => {
  const avg = speeds.reduce((a, b) => a + b, 0) / speeds.length;
  return avg < 12 ? "Calm day" : "Windy day";
});

console.log(getWindAverage([10, 14, 8, 12, 16])); // 💨 -> Windy day
```

✅ **Answer:** Average 12, so “Windy day”.

---

### 2️⃣ *Luffy’s Gear Speed*

Increase % = `(final - initial) / initial * 100`

```js
const calculateBoost = jest.fn((initial, final) => {
  return ((final - initial) / initial) * 100;
});

console.log(calculateBoost(20, 120)); // 🥊 -> 500%
```

✅ **Answer:** 500% speed boost.

---

## 🎨 **Wassima’s Exercises**

### 1️⃣ *The Drawing Puzzle* (Heron’s formula)

Area = √(s(s-a)(s-b)(s-c))

```js
const getDrawingArea = jest.fn((a, b, c) => {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
});

console.log(getDrawingArea(3, 4, 5)); // ✏️ -> 6
```

✅ **Answer:** 6 square units.

---

### 2️⃣ *Rain Drops Collection*

Each hour collects 4+6+8 = 18 liters.
5 hours = 18 × 5 = 90 liters.

```js
const calculateTotalRain = jest.fn((buckets, hours) => {
  const totalPerHour = buckets.reduce((a, b) => a + b, 0);
  return totalPerHour * hours;
});

console.log(calculateTotalRain([4, 6, 8], 5)); // 🌧️ -> 90 L
```

✅ **Answer:** 90 liters total.

---

## 📚 **Yazid’s Exercises**

### 1️⃣ *Aristotle’s Logic*

Mean virtue = `(low + high) / 2`

```js
const getMeanVirtue = jest.fn((low, high) => {
  return (low + high) / 2;
});

console.log(getMeanVirtue(10, 40)); // ⚖️ -> 25
```

✅ **Answer:** 25

---

### 2️⃣ *The Book Reader*

* 6 days: 30 pages/day
* Sunday: 60 pages/day
  → Total per week = (6 × 30) + 60 = 240 pages
  → 4 weeks = 240 × 4 = 960 pages

```js
const calculateReadingTotal = jest.fn((daily, weeks) => {
  const perWeek = daily * 6 + daily * 2; // double on Sunday = +daily
  return perWeek * weeks;
});

console.log(calculateReadingTotal(30, 4)); // 📖 -> 960 pages
```

✅ **Answer:** 960 pages total.

---

Would you like me to combine all of these into **one Jest test suite** (so you can copy-paste and run `npm test` to verify everything automatically)?
