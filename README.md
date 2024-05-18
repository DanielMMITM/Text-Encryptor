# Text-Encryptor 🔐

The idea of this project is to encrypt and decrypt your text. There are only 2 encryption algorithms at the moment.

We bring to the user an interactive console component so it gives a real console experience. The user must follow some rules (flags) to encrypt and decrypt a text, otherwise it won´t work.

### ⚠️ Warning ⚠️
**Here are some considerations that I just found aren't working correctly**
* Avoid the usage of keys with repeated vowels like: *secret*, *banana*, *robot*, etc.

## Key Transposed Matrix

Here is the usage of the algorithm:

### Encrypt a text

- Use **_-t_** followed by the text to encrypt.
- Use **_-a_** followed by the algorithm to use (Clave).
- Use **_-rn_** followed by the number of rows to encrypt your text (3 / 4 / 5).
- Use **_-k_** followed by the secret key to encrypt your text.

### Decrypt a text

- To decrypt a text, write all the previous flags replacing the text with the given encrypted text and add **_-d_** at the end

## Columns Transposed Matrix

Here is the usage of the algorithm:

### Encrypt a text

- Use **_-t_** followed by the text to encrypt.
- Use **_-a_** followed by the algorithm to use (Clave).
- Use **_-rn_** followed by the number of rows to encrypt your text (3 / 4 / 5).
- Use **_-k_** followed by the secret key to encrypt your text.

### Decrypt a text

- Replace **_-rn_** with **_-cn_** followed by the number of columns given.
- Replace the text with the given encrypted text.
- Write all the previous flags and add **_-d_** at the end of the sentence.

---

## Preview
### Home
![home-page](https://github.com/DanielMMITM/Text-Encryptor/assets/86424705/d134124b-68d3-4926-b01a-905a35068a3c)

### Encrypt / Decrypt Key algorithm
![key-encrypt-decrypt](https://github.com/DanielMMITM/Text-Encryptor/assets/86424705/7ed5f36a-c669-4ed5-90fa-6797e20c7a20)

### Encrypt / Decrypt Column Algorithm
![column-encrypt-decrypt](https://github.com/DanielMMITM/Text-Encryptor/assets/86424705/dd549724-d117-42cd-b954-12c9d5fe1e34)




