package com.example.mvc.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class ClubDto {
    private int id;
    private String title;
    private  String photoUrl;
    private String content;
    private LocalDateTime createdOn;
    private LocalDateTime updatedOn;
}
