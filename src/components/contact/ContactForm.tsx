'use client';

import { useState } from 'react';

interface FormState {
  guardianName: string;
  childAge: string;
  consultTiming: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  guardianName: '',
  childAge: '',
  consultTiming: '',
  phone: '',
  message: '',
};

const inputClass =
  'border border-[var(--color-border-brand)] focus:border-[var(--color-primary)] rounded-xl p-3 w-full outline-none transition';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('문의가 접수되었습니다. 빠른 시일 내 연락드리겠습니다.');
    setForm(initialState);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="guardianName">
          보호자명
        </label>
        <input
          id="guardianName"
          name="guardianName"
          type="text"
          value={form.guardianName}
          onChange={handleChange}
          placeholder="보호자 성함을 입력해주세요"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="childAge">
          아이 연령
        </label>
        <select
          id="childAge"
          name="childAge"
          value={form.childAge}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">연령을 선택해주세요</option>
          <option value="0">만 0세</option>
          <option value="1">만 1세</option>
          <option value="2">만 2세</option>
          <option value="3">만 3세</option>
          <option value="4">만 4세</option>
          <option value="5">만 5세</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="consultTiming">
          상담 희망 시기
        </label>
        <select
          id="consultTiming"
          name="consultTiming"
          value={form.consultTiming}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">상담 희망 시기를 선택해주세요</option>
          <option value="immediate">즉시</option>
          <option value="1month">1개월 내</option>
          <option value="3months">3개월 내</option>
          <option value="after">상담 후 결정</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="phone">
          연락처
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="010-0000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dark mb-1" htmlFor="message">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="궁금하신 점을 자유롭게 작성해주세요"
          rows={5}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-dark font-bold w-full py-4 rounded-full hover:bg-primary/80 transition-colors duration-200 mt-2"
      >
        문의 접수하기
      </button>
    </form>
  );
}
