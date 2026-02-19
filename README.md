1. What is the difference between null and undefined?
    **null:** যখন ইচ্ছা করে কোনো ভেরিয়েবলকে "খালি" রাখতে চাই, তখন null ব্যবহার করা হয়।
    **undefined:** যখন একটি কোনো মান (value) ছাড়া ভেরিয়েবল ডিক্লেয়ার করা হয়, তখন সেটি ডিফল্টভাবে undefined থাকে। এটি ডেভেলাপার থেকে সেট করা যায় না।

2. What is the use of the map() function in JavaScript? How is it different from forEach()?
    **map():** এটি একটি অ্যারের প্রতিটি উপাদানের ওপর কাজ করে এবং একটি নতুন অ্যারে রিটার্ন করে।
    **forEach():** এটি শুধু প্রতিটি উপাদানের ওপর কাজ (লুপ) করে, কিন্তু কোনো কিছু রিটার্ন করে না।

3. What is the difference between == and ===?
    **== :** এটি শুধু মান (value) চেক করে।
    **=== :** এটি মান এবং ডাটা টাইপ (type) দুটোই চেক করে।

4. What is the significance of async/await in fetching API data?
    API থেকে ডাটা আনার সময় দেরিতে রেস্পন্স করলে কোড যেন আটকে না পরবর্তী লাইনের দিকে এগুতে পারে এবং সিরিয়াল অনুযায়ী কাজ করতে পারে, সেজন্য এটি ব্যবহৃত হয়। এটি ব্যবহার করলে Asynchronous কোড দেখতে Synchronous কোডের মতো সহজ এবং পরিষ্কার মনে হয়।
    
5. Explain the concept of Scope in JavaScript (Global, Function, Block).
    **১। Global Scope :** কোডের যেকোনো জায়গা থেকে এক্সেস করা যায়।
    **২। Function Scope	:** শুধুমাত্র ঐ ফাংশনের ভেতর থেকে এক্সেস করা যায়।
    **৩। Block Scope {} :** (কার্লি ব্র্যাকেট) এর ভেতর সীমাবদ্ধ থাকে।
