import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 예전에 사용한 경로를 변경한 경우 사용 (A->B로 이동)
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true, // 영원히 삭제된 페이지임을 검색 엔진에게 알려줌
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, // 일시적으로 삭제된 페이지임을 검색 엔진에게 알려줌
      },
    ];
  },
};

export default nextConfig;
