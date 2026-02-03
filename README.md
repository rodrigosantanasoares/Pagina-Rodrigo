# 1. Classificação dos Devices (macro visão)

Primeiro, antes de qualquer número, você precisa responder:  
**“Que tipo de dispositivo é esse e onde ele se encaixa no ecossistema?”**

### Categorias do Projeto

| Categoria | O que é | Exemplo |
| :--- | :--- | :--- |
| **MCU (Microcontrolador)** | Ultra baixo consumo, TinyML | ESP32-S3, ESP32-CAM |
| **SBC (Single Board Computer)** | Linux, prototipagem | Raspberry Pi, Jetson Nano, Coral Dev Board, Orange Pi |
| **Acelerador IA** | ASIC/VPU dedicado | Coral USB, NCS2, Hailo |
| **Edge Computer** | PC embarcado de alto desempenho | Mini PC com RTX 3050 |

---

# 2. Devices — “O que são” (descrição objetiva)

### Raspberry Pi
SBC de propósito geral, amplamente utilizado para prototipagem. Não possui aceleração nativa de IA, mas pode ser integrado a aceleradores externos via USB, PCIe ou M.2.

---

# 3. Tabelas de Levantamento Técnico

### 3.1 Tabela base – Visão Computacional (SBCs / Edge)

| Device | Categoria | CPU | GPU / Acelerador | RAM | Frameworks IA | SOP | Power (Típico) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Jetson Nano** | SBC IA | Quad ARM A57 | 128 CUDA (Maxwell) | 4 GB | CUDA, TensorRT, OpenCV | Linux | ~5–10 W |
| **Raspberry Pi 4** | SBC | Quad Cortex-A72 | — | 4–8 GB | OpenCV, TFLite | Linux | ~3–7 W |
| **Orange Pi 5 Plus** | SBC IA | RK3588 (8-core) | Mali + NPU | 8–16 GB | RKNN, OpenCV | Linux | ~5–15 W |
| **Coral Dev Board** | SBC IA | Cortex-A53 | Edge TPU | 1 GB | TFLite | Linux | ~5–10 W |
| **Mini PC (RTX 3050)** | Edge PC | i5-8500T | RTX 3050 | 16 GB | CUDA, TensorRT, PyTorch | Linux/Win | 60W+ |

### 3.2 Tabela – Aceleradores Externos

| Acelerador | Tipo | Interface | Tecnologia | Framework | Power |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Coral USB** | ASIC | USB 3.0 | Edge TPU | TFLite | ~2 W |
| **Intel NCS2** | VPU | USB | Myriad X | OpenVINO | ~1 W |
| **Hailo-8** | ASIC | PCIe / M.2 | NPU | Hailo SDK | ~2–3 W |

> **Nota:** Sim, existe a **Raspberry Pi AI HAT+**, que integra Hailo-8 oficialmente.

### 3.3 Tabela – Microcontroladores (TinyML)

| Device | Categoria | CPU | RAM | Flash | IA Suportada | Power |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ESP32-S3** | MCU | Dual Xtensa | 512 KB | 8 MB | TFLite Micro | mW |
| **ESP32-CAM** | MCU | Xtensa | 520 KB | 4 MB | TinyML (limitado) | mW |

---

# 4. Separação por Domínio

### Visão Computacional
* Jetson Nano
* Orange Pi 5 Plus
* Coral Dev Board
* Raspberry Pi + Hailo / Coral
* Mini PC RTX

### Áudio
* ESP32-S3
* Raspberry Pi
* Jetson Nano

### SLM / TinyML / NLP leve
* ESP32-S3
* Raspberry Pi
* Mini PC (casos mais pesados)
