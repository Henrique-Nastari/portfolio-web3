// lib.rs — Módulo Rust compilado para WebAssembly
// Roda diretamente no browser do visitante — zero servidor.
//
// Para compilar: wasm-pack build --target web
// Output: packages/wasm/pkg/ (importado pelo Next.js via src/lib/wasm.ts)
//
// TODO (Dia 6): Implementar verify_credential(message, signature, address) -> bool
// Referência: https://rustwasm.github.io/wasm-bindgen/

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn version() -> String {
    String::from("1.0.0")
}
