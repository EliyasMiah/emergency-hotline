
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: A. (getElementById)->id doree sodo matro ekta element k select kora jay. 

     B. (getElementsByClassName)-> class name doree same class er sob element paoa jay"--HTML collection return  koree--" and aeta arryer moto kinto array na ...index doree elemnt ka find kora hoy.

     C. (querySelector)-> css selector doree sodo matro first element ta k return koree.

     D. (querySelectorAll)-> css selector doree same selector er sob element paoajay. foreach lop use koree kaj kora jay.

2. How do you **create and insert a new element into the DOM**?
Ans: document.createElement('h1')
and insert er jonno, parent element er sathe appendChild korte hoy.

3. What is **Event Bubbling** and how does it work?
**Event Bubbling** holo parentNode doree doree oporee dickee bubbling hobe jotokhon parentNode thakbee.

4. What is **Event Delegation** in JavaScript? Why is it useful?
**Event Delegation** holo chaild element er even control kora. jemon:- sob chaild element er opor even lisener na bosiye..parent element er opor even lisener bosiye ...child element er even handle kora.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
**preventDefault()-> broser a gote jay emon defult action k thamiye deoa jay. jemon:- form subite er khetree auto load hoy aetake o thamiye deoa jay .
---
stopPropagation()**-> aeta chiled element er opor gote jaoa event ke Even bubbling stop kore day. chield element a ote jaoa event chaild element a thamiya deoa jay.
