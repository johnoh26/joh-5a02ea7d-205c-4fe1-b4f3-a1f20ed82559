import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth_token';

@Injectable({ providedIn: 'root' })
export class TokenService {
	setToken(token: string) {
		try {
			localStorage.setItem(TOKEN_KEY, token);
		} catch (e) {
			console.warn('Unable to access localStorage to set token', e);
		}
	}

	getToken(): string | null {
		try {
			return localStorage.getItem(TOKEN_KEY);
		} catch (e) {
			console.warn('Unable to access localStorage to get token', e);
			return null;
		}
	}

	clearToken() {
		try {
			localStorage.removeItem(TOKEN_KEY);
		} catch (e) {
			console.warn('Unable to access localStorage to clear token', e);
		}
	}

	// decode JWT payload safely; returns null on error
	decodeToken(token?: string): any | null {
		const t = token ?? this.getToken();
		if (!t) return null;
		const parts = t.split('.');
		if (parts.length < 2) return null;
		try {
			// base64url -> base64
			let payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
			// pad
			while (payload.length % 4) payload += '=';
			const json = atob(payload);
			try {
				return JSON.parse(json);
			} catch (e) {
				// fallback: attempt percent-decoding
				const decoded = decodeURIComponent(
					json
						.split('')
						.map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
						.join('')
				);
				return JSON.parse(decoded);
			}
		} catch (e) {
			console.warn('Failed to decode token', e);
			return null;
		}
	}

	isTokenExpired(token?: string): boolean {
		const payload = this.decodeToken(token);
		if (!payload) return true;
		// exp is in seconds since epoch
		const exp = payload.exp;
		if (!exp) return true;
		const now = Math.floor(Date.now() / 1000);
		return now >= exp;
	}
}
