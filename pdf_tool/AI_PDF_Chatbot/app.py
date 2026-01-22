import streamlit as st
from pdf_reader import extract_text_from_pdf
from ocr_reader import extract_text_with_ocr
from qa_model import get_answer
from utils import clean_text

st.title("📄 AI PDF Chatbot (No API)")

pdf_file = st.file_uploader("Upload a PDF", type=["pdf"])
question = st.text_input("Ask a question")

if pdf_file:
    with open("temp.pdf", "wb") as f:
        f.write(pdf_file.read())

    text = extract_text_from_pdf("temp.pdf")

    if not text.strip():
        text = extract_text_with_ocr("temp.pdf")

    text = clean_text(text)

    if question:
        answer = get_answer(question.lower(), text)
        st.success("🤖 Answer:")
        st.write(answer)
