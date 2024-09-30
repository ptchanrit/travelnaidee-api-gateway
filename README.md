### Task 1: API-Gateway

เนื่องจาก Software Engineer, Frontend ที่วงในนั้น โดยปกติแล้วเราจะรับผิดชอบตั้งแต่ Web Application จนไปถึง API-Gateway ซึ่งเป็นส่วนที่เป็นจุดศูนย์รวม ข้อมูลจาก service ต่าง ๆ ในวงใน

ซึ่งใน task นี้เราจะต้องสร้าง API Gateway Server ที่ใช้ดึงข้อมูลจาก JSON Server ที่ถูกเตรียมไว้ให้ โดยมี Requirement ที่จะกล่าวใน Section ถัดไป

** การสร้าง API-Gateway Server นั้น เราไม่จำกัดภาษาที่ใช้ สามารถสร้างด้วย วิธี หรือ ภาษาใดก็ได้ **

#### Requirements

สร้าง Search API ที่สามารถนำ keyword ที่ได้จาก ฝั่ง client มาหา trip จาก JSON Server API

โดยค้นหาจาก title, description และ tag จาก JSON data

สิ่งที่ client จะได้รับคือ list ของ trip object ที่ตอบโจทย์ keyword ที่ user search เข้ามา

โดยจะต้องแน่ใจว่า API ที่ส่งออกไปนั้น จะสามารถทำงานได้อย่างถูกต้องด้วย



##  Note
เนืองจากไฟล์ที่ได้รับสำหรับเทส ไม่มี JSON Server ทางผมเลยทำ mockup เป็น data ตัวอย่างตาม note ใน txt
