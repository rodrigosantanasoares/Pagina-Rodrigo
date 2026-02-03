# 1. Classificação dos Devices (macro visão)

Antes de qualquer número, responda:  
**“Que tipo de dispositivo é esse e onde ele se encaixa no ecossistema?”**

### Categorias do Projeto

| Categoria | O que é | Exemplo |
| :--- | :--- | :--- |
| **MCU (Microcontrolador)** | Ultra baixo consumo, TinyML | ESP32-S3, ESP32-CAM |
| **SBC (Single Board Computer)** | Linux, prototipagem | Raspberry Pi 5, Jetson Nano, Orange Pi 5 |
| **Acelerador IA (HAT/USB)** | Chip dedicado (NPU/ASIC) | Hailo-8, Coral USB, Pi AI HAT+ |
| **Edge Computer** | PC embarcado de alto desempenho | Mini PC com RTX 3050 |

---

# 2. Devices — “O que são” (descrição objetiva)

### Raspberry Pi 5 + AI HAT+
A combinação da SBC mais popular com um acelerador dedicado via PCIe. O **AI HAT+** utiliza chips Hailo para tirar a carga de processamento de IA da CPU principal, permitindo visão computacional em tempo real e, na versão "Plus 2", até modelos de linguagem (LLMs) locais.

---

# 3. Tabelas de Levantamento Técnico

### 3.1 Tabela base – Visão Computacional e IA (SBCs / Edge)

| Device | Categoria | CPU | Acelerador IA (NPU) | RAM | Frameworks IA | Power |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Jetson Nano** | SBC IA | Quad ARM A57 | 128-core Maxwell | 4 GB | CUDA, TensorRT | ~5–10 W |
| **Orange Pi 5 Plus** | SBC IA | RK3588 (8-core) | NPU (6 TOPS) | 8–16 GB | RKNN, PyTorch | ~5–15 W |
| **Coral Dev Board** | SBC IA | Cortex-A53 | Edge TPU (4 TOPS) | 1 GB | TFLite | ~5–10 W |
| **Mini PC (RTX 3050)** | Edge PC | i5-8500T | RTX 3050 (Laptop) | 16 GB | CUDA, TensorRT | 60W+ |

### 3.2 Tabela – Aceleradores Dedicados (Ecossistema Raspberry Pi / PC)

| Acelerador | Interface | Performance | Destaque | Framework | Power |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pi AI HAT+ (13T)** | PCIe (RPI 5) | 13 TOPS | Custo-benefício | Hailo SDK / TFLite | ~1.5 W |
| **Pi AI HAT+ (26T)** | PCIe (RPI 5) | 26 TOPS | Visão pesada | Hailo SDK / TFLite | ~2.5 W |
| **Pi AI HAT+ 2** | PCIe (RPI 5) | 40 TOPS | **GenAI (8GB RAM)** | Hailo-10H / ONNX | ~3.0 W |
| **Coral USB** | USB 3.0 | 4 TOPS | Portabilidade | TFLite | ~2.0 W |
| **Hailo-8 (M.2)** | M.2 / PCIe | 26 TOPS | Alta performance | Hailo SDK | ~2.5 W |

### 3.3 Tabela – Microcontroladores (TinyML)

| Device | Categoria | CPU | RAM | Flash | IA Suportada | Consumo |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ESP32-S3** | MCU | Dual Xtensa | 512 KB | 8 MB | TFLite Micro | mW |
| **ESP32-CAM** | MCU | Xtensa | 520 KB | 4 MB | TinyML (limitado) | mW |

---

# 4. Separação por Domínio

### Visão Computacional (Detecção, Segmentação)
* Raspberry Pi 5 + AI HAT+ (13T ou 26T)
* Jetson Nano
* Orange Pi 5 Plus
* Coral USB

### Áudio (Reconhecimento de Voz, Wake Word)
* ESP32-S3
* Raspberry Pi 5
* Raspberry Pi AI HAT+ 2 (Processamento local via LLM/Whisper)

### Generative AI / LLM / NLP no Edge
* **Raspberry Pi AI HAT+ 2:** O único do grupo com RAM dedicada (8GB) no chip de IA para rodar modelos tipo Llama.
* **Mini PC RTX:** Para modelos que exigem memória de vídeo e processamento paralelo massivo.
* **Orange Pi 5:** Capaz de rodar modelos leves (SLMs) via NPU/CPU.
