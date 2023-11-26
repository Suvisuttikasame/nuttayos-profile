export default function Home() {
  return (
    <main className="text-xs py-8">
      <div className="flex flex-col items-center gap-2 py-2 pb-8">
        <div className="bg-red-500 h-24 w-24 rounded-full"></div>
        <p className="p-2 w-3/4">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in
          section 1.10.32.
        </p>
      </div>
      <div className="flex gap-14 pl-2 pb-8">
        <div>
          <h1 className="text-lg decoration-1">Experience</h1>
          <ul className="flex flex-col gap-2 list-disc pl-4">
            <li>
              <span className="text-base">Hocco</span>
              <br />
              <p>
                Neque porro quisquam est qui dulorem ipsum quia dolor sit amet
              </p>
            </li>
            <li>
              <span className="text-base">Denso Intenational Asia</span>
              <br />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
            </li>
            <li>
              <span className="text-base">Turnkey communication service</span>
              <br />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
            </li>
            <li>
              <span className="text-base">Marsun</span>
              <br />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-grow bg-red-500"></div>
      </div>
      <div className="flex gap-14 pl-2">
        <div className="flex-grow bg-red-500"></div>
        <div>
          <h1 className="text-lg decoration-1">Education</h1>
          <ul className="flex flex-col gap-2 list-disc pl-4">
            <li>
              <span className="text-base">Chulalongkorn university</span>
              <br />
              <p>
                Neque porro quisquam est qui dulorem ipsum quia dolor sit amet
              </p>
            </li>
            <li>
              <span className="text-base">Debsirin school</span>
              <br />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
