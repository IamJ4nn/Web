package com.example.mvc.service;

import com.example.mvc.dto.ClubDto;
import com.example.mvc.models.Club;

import java.util.List;

public interface ClubService {
    List<ClubDto> findAllClubs();
}
