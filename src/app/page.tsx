export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          안녕하세요! 제 첫 번째 배포입니다 🚀
        </h1>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
            👋
          </div>
          <h2 className="text-xl font-semibold text-slate-800">황진성</h2>
          <p className="mt-1 text-sm text-slate-500">Software Engineer</p>
          <p className="mt-4 leading-relaxed text-slate-600">
            개발을 좋아하는 엔지니어입니다.
            새로운 기술을 배우고 좋은 서비스를 만드는 것에 관심이 많습니다.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/jinseonghwang"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
